//
// Initiate replicaset for shard A
//
rs.initiate( {
   _id : "shardAreplica",
   members: [
      { _id: 1, host: "127.0.0.1:29001", priority:20 },
      { _id: 2, host: "127.0.0.1:29002", priority:1 },
      { _id: 0, host: "127.0.0.1:29003", priority:0, arbiterOnly:true }
   ]
});


