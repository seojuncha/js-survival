With MongoDB

## MongoDB Note
Install MongoDB on Debian Linux
```shell
$ sudo apt-get install gnupg curl
$ curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc |    sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg    --dearmor
$ echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] http://repo.mongodb.org/apt/debian bookworm/mongodb-org/8.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
$ sudo service mongod start
```

Edit /etc/mongod.conf 
- to allow remote access
```shell
$ sudo vi /etc/mongod.conf
```
```
#  bindIp: 127.0.0.1
  bindIp: 0.0.0.0
```
- change data directory
```shell
$ sudo mkdir /data/mongodb
$ sudo chown -R mongodb:mongodb /data/mongodb
$ sudo vi /etc/mongod.conf
storage:
  dbPath: /data/mongodb
$ sudo systemctl restart mongod
$ ls -al /data/mongodb
```

Connect URI
- mongodb://<host>:<port>/<database>



MongoDB CLI on macOS
```shell
$ brew tap mongodb/brew
$ brew install mongosh
```

### Default Database
- admin
- config
- local

## PostgreSQL Note
install on Debian
```shell
$ sudo apt install postgresql
```

existing directory
```shell
$ sudo apt install rsync
$ sudo ls /var/lib/postgresql/15/main/
$ sudo rsync -av /var/lib/postgresql/14/main/ /data/postgresql/
$ sudo ls /data/postgresql
$ sudo chown -R postgres:postgres /data/postgresql
$ sudo vi /etc/postgresql/15/main/postgresql.conf
data_directory = '/data/postgresql'
$ sudo systemctl start postgresql
$ sudo -u postgres psql -c "SHOW data_directory;"
```

connection
```shell
# sudo vi /etc/postgresql/15/main/postgresql.conf
listen_addresses = '*'
# sudo vi /etc/postgresql/15/main/pg_hba.conf
host    all             all             0.0.0.0/0               scram-sha-256
```


## With Node.js/Express Note

```shell
$ npm install mongoose
```
