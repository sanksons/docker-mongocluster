# Mongo Cluster Setup [Docker Build]
Used to build Mongo cluster build image for docker.

The build image lies at:
[Mongo Cluster](https://hub.docker.com/r/sanksons/mongocluster/)

## Cluster Details:
The cluster uses 1 Mongos, Config Replica with 3 servers, 1 Shard Replica with 3 servers(i.e primary + secondary + arbitor).

- The mongos port is 28001.
- Config servers listen on ports 27001, 27002, 27003.
- Shard Servers (pri, secondary) listens on (29001, 29002). Arbitor listens on 29003.

## How to Setup?
First you will need to install docker, refer following link for the same:  
[Docker Installation instructions for ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04) 

- Once done, you need to pull this image.
```
docker pull sanksons/mongocluster:latest
```

- Execute following command to start mongo cluster.
```
docker run -p 28001:28001 sanksons/mongocluster:latest
```

- Once done Mongos will be listening for connections on port 28001.  
You can simple connect to mongos by mongo cli using:
```
mongo --port=28001
```
## Additional Info:
[Deploy a shard](https://docs.mongodb.com/manual/tutorial/deploy-shard-cluster/)
[Deploy a  Replica](https://docs.mongodb.com/manual/tutorial/deploy-replica-set/)

