# Mongo Cluster Setup [Docker Build]
Used to build Mongo cluster build image for docker.

The build image lies at:
[Mongo Cluster](https://hub.docker.com/r/sanksons/mongocluster/)

## Cluster Details:
The cluster uses 1 Mongos, Config Replica with 3 servers, 1 Shard Replica with 3 servers(i.e primary + secondary + arbitor).

- The mongos port is 28001.
- Config servers listen on ports 27001, 27002, 27003.
- Shard Servers (pri, secondary) listens on (29001, 29002). Arbitor listens on 29003.
