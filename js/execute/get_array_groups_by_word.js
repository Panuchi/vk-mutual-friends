return API.groups.search({
    q: "$word$",
    count: "1000",
    https: "1",
    v: "5.92"
}).items@.id;
