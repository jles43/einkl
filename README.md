# einkl

## database

### create and run database container

    > cd database
    > docker build . -t einkl-database

image named `einkl-database` is created

    > docker run -p 9802:27017 [-v <volume-name>:/data/db] -d --name <container-name> einkl-database

example

    > docker run -p 9802:27017 -d --name emongo einkl-database

### start and stop database container

    > docker stop <container-name>
    > docker start <container-name>

