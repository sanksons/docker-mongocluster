
//
// Initiate Config server replicaset
//
rs.initiate(
  {
    _id: "replset1",
    configsvr: true,
    members: [
      { _id : 0, host : "127.0.0.1:27001" },
      { _id : 1, host : "127.0.0.1:27002" },
      { _id : 2, host : "127.0.0.1:27003" }
    ]
  }
);

