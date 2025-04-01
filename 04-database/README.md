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

Edit /etc/mongod.conf to allow remote access
```shell
$ sudo vi /etc/mongod.conf
```
```
#  bindIp: 127.0.0.1
  bindIp: 0.0.0.0
```

MongoDB CLI on macOS
```shell
$ brew tap mongodb/brew
$ brew install mongosh
```

### Default Database
- admin
- config
- local


## With Node.js/Express Note

```shell
$ npm install mongoose
```
