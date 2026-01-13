/**
 * API ROUTE: /api/items/[id]
 *
 * KEY NEXT.JS CONCEPT: Dynamic API Routes
 * - [id] in folder name = dynamic segment
 * - Captures any value: /api/items/1, /api/items/2, etc.
 * - Access the value via params.id
 *
 * PARAMS:
 * - Second argument to route handlers contains params
 * - params.id gives us the ID from the URL
 */

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Helper function to read items
function readItems() {
  const filePath = path.join(process.cwd(), "src", "data", "items.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

/**
 * GET /api/items/[id]
 * Fetches a single item by ID
 *
 * Example: GET /api/items/1 → returns item with id: 1
 */
export async function GET(request, { params }) {
  try {
    // Get the ID from URL params (it's a string, so convert to number)
    const { id } = await params;
    const itemId = parseInt(id);

    // Read all items
    const items = readItems();

    // Find the item with matching ID
    const item = items.find((item) => item.id === itemId);

    // If item not found, return 404
    if (!item) {
      return NextResponse.json(
        { error: "Item not found" },
        { status: 404 }
      );
    }

    // Return the found item
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch item" },
      { status: 500 }
    );
  }
}
