function parseQuery(query) {
    if (!query) {
        return {};
    }
    // Remove leading "?", if any
    query = query.replace("?", "");

    var query_items = query.split("&"),
        query_params = {};

    query_items.map(function(item, index) {
        var split_item = item.split("=");
        if (split_item.length === 2) {
            var key = item.split("=")[0],
                value = item.split("=")[1];
            query_params[key] = value;
        } else {
            console.log("Bad query param: ", item);
            return false;
        }
    });

    return query_params;
}

function buildQueryFromObject(query_params) {
    var query = "?";
    for (var key in query_params) {
        if (query.slice(-1) !== "?") {
            query += "&";
        }
        query += key + "=" + query_params[key];
    }

    return query;
}
