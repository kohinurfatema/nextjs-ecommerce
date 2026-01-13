/**
 * API ROUTE: /api/items
 *
 * KEY NEXT.JS CONCEPT: Route Handlers
 * - File named "route.js" in app/api folder = API endpoint
 * - Export functions named after HTTP methods: GET, POST, PUT, DELETE
 * - This replaces Express.js routes in Next.js!
 *
 * HOW IT WORKS:
 * - GET /api/items → runs the GET function below
 * - POST /api/items → runs the POST function below
 *
 * NextResponse:
 * - Used to send JSON responses
 * - Similar to Express's res.json()
 */

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Helper function to get the path to items.json
function getItemsFilePath() {
  return path.join(process.cwd(), "src", "data", "items.json");
}

// Helper function to read items from JSON file
function readItems() {
  const filePath = getItemsFilePath();
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

// Helper function to write items to JSON file
function writeItems(items) {
  const filePath = getItemsFilePath();
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2));
}

/**
 * GET /api/items
 * Fetches all items from the JSON file
 */
export async function GET() {
  try {
    const items = readItems();

    // Return items as JSON response
    return NextResponse.json(items);
  } catch (error) {
    // Return error response
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/items
 * Adds a new item to the JSON file
 * Used by the "Add Item" page (protected route)
 */
export async function POST(request) {
  try {
    // Get the request body (the new item data)
    const newItem = await request.json();

    // Read existing items
    const items = readItems();

    // Generate new ID (max ID + 1)
    const maxId = items.reduce((max, item) => Math.max(max, item.id), 0);
    newItem.id = maxId + 1;

    // Add default values if not provided
    newItem.inStock = newItem.inStock ?? true;

    // Add new item to array
    items.push(newItem);

    // Save back to file
    writeItems(items);

    // Return the created item
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 }
    );
  }
}
