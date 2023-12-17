// Class representing a Graph Editor
class GraphEditor {
    constructor(canvas, graph) {
        this.canvas = canvas;
        this.graph = graph;

        this.ctx = this.canvas.getContext("2d");
        this.selected = null; // Currently selected point
        this.hovered = null; // Point currently being hovered over
        this.dragging = false; // Flag indicating if a point is being dragged
        this.mouse = null; // Current mouse position

        this.#addEventListeners(); // Add event listeners for mouse interactions
    }

    // Private method to add event listeners for mouse interactions
    #addEventListeners() {
        // Handle mouse down event
        this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));

        // Handle mouse move event
        this.canvas.addEventListener("mousemove", this.#handleMouseMove.bind(this));

        // Prevent context menu from appearing on right click
        this.canvas.addEventListener("contextmenu", (e) => e.preventDefault());

        // Handle mouse up event
        this.canvas.addEventListener("mouseup", (e) => this.dragging = false); // Stop dragging
    }

    // Private method to handle mouse move event
    #handleMouseMove(e) {
        this.mouse = new Point(e.offsetX, e.offsetY); // Update the current mouse position
            this.hovered = getNearestPoint(this.mouse, this.graph.points, 10); // Get the nearest point to the mouse position
            if (this.dragging) {
                this.selected.x = this.mouse.x; // Update the x-coordinate of the selected point to match the mouse position
                this.selected.y = this.mouse.y; // Update the y-coordinate of the selected point to match the mouse position
            }
    }

    // Private method to handle mouse down event
    #handleMouseDown(e) {
        if (e.button == 2) { // Right click
            if (this.selected) {
                this.selected = null; // Deselect the currently selected point
            } else if (this.hovered) {
                this.#removePoint(this.hovered); // Remove the hovered point
            }
        }
        if (e.button == 0) { // Left click
            if (this.hovered) {
                if (this.selected) {
                    this.graph.tryAddSegment(new Segment(this.selected, this.hovered)); // Try to add a segment between selected and hovered points
                }
                this.selected = this.hovered; // Set the selected point to the hovered point
                this.dragging = true; // Start dragging
                return;
            }
            this.graph.addPoint(this.mouse); // Add a new point at the current mouse position
            this.#select(this.mouse); // Select the newly added point
            this.hovered = this.mouse; // Set the hovered point to the newly added point
        }
    }

    // Private method to select a point
    #select(point) {
        if (this.selected) {
            this.graph.tryAddSegment(new Segment(this.selected, point)); // Try to add a segment between the previously selected point and the new point
        }
        this.selected = point; // Set the selected point to the new point
    }

    // Private method to remove a point
    #removePoint(point) {
        this.graph.removePoint(point); // Remove the specified point from the graph
        this.hovered = null; // Reset the hovered point
        if (this.selected == point) {
            this.selected = null; // Deselect the removed point if it was selected
        }
    }

    // Display the graph editor
    display() {
        this.graph.draw(this.ctx); // Draw the graph
        if (this.hovered) {
            this.hovered.draw(this.ctx, { fill: true }); // Draw the hovered point with fill
        }
        if (this.selected) {
            const intent = this.hovered ? this.hovered : this.mouse;
            new Segment(this.selected, intent).draw(this.ctx, { dash : [3, 3] }); // Draw a dashed segment between the selected point and the intent point
            this.selected.draw(this.ctx, { outline: true }); // Draw the selected point with an outline
        }
    }
}