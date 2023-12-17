
/**
 * Finds the nearest point to a given location from an array of points.
 * @param {Object} loc - The location object to find the nearest point from.
 * @param {Array} points - An array of points to search for the nearest point.
 * @param {number} [threshold=Number.MAX_SAFE_INTEGER] - The maximum distance allowed 
 * for a point to be considered as nearest.
 * @returns {Object|null} - The nearest point object or null if no point is found within the threshold.
 */
function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER) {
    let nearest = null;
    let minDist = Number.MAX_SAFE_INTEGER;
    for (const point of points) {
        const dist = distance(point, loc);
        if (dist < minDist && dist < threshold) {
            minDist = dist;
            nearest = point;
        }
    }
    return nearest;
}


function distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}