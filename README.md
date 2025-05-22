# DXF 2D Scene Viewer & Annotator

**Project – भूग्रहण (Bhūgrahaṇ)**

This project provides a powerful and intuitive web-based tool for viewing 2D CAD drawings (DXF files converted to Three.js JSON scenes) and adding custom, interactive annotations (hotspots) to them. Built with Three.js for rendering and Vite for a fast development experience, this viewer is ideal for facilities management, spatial planning, or any application requiring detailed interaction with 2D floor plans and diagrams.

**Key Features:**

* **Flexible File Loading:** Supports loading Three.js JSON scenes from `.json`, gzipped `.gz` / `.json.gz` files, and custom `.dxfhs.gz` archives (which include both the scene and saved hotspots).
* **Intuitive Hotspot Drawing:**
    * Draw custom polygon hotspots directly on your loaded DXF plans.
    * Features intelligent snapping to existing DXF vertices for precise marking.
    * Supports closing polygons by clicking the first point or pressing Enter.
    * Undo last point with Ctrl+Z / Cmd+Z.
* **Rich Hotspot Data & Customization:**
    * Assign unique IDs, custom Z-levels (relative to the drawing plane), and specific room types (e.g., Classroom, Lab, Office).
    * Option for custom colors for "Unspecified" room types.
    * Adjust individual hotspot opacity for clear visualization.
* **Comprehensive Hotspot Management:**
    * View all defined hotspots in a clear, interactive list.
    * Toggle hotspot visibility, select hotspots for quick focus, and delete them.
    * Highlight hotspots on hover and click for instant information display.
* **Dynamic DXF Opacity Control:** Adjust the transparency of the main loaded DXF drawing to better visualize underlying details and overlying annotations.
* **Persistent Data Storage:** Export your entire annotated scene (DXF + custom hotspots) into a single, compressed `.dxfhs.gz` file for easy saving and reloading.
* **Optimized Performance:** Leverages Vite for rapid development and optimized production builds.

**Technology Stack:**

* **Three.js:** For 3D/2D rendering and scene management.
* **Vite:** Modern frontend build tool for fast development and optimized builds.
* **JavaScript (ES Modules):** For core application logic.
* **HTML5 & CSS3:** For structuring and styling the user interface.
* **Pako.js:** For GZIP decompression.
* **fflate:** For GZIP compression and multi-file archive handling.

---
