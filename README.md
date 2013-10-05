# Vagrant NodeJs

Build the vagrant box:

```shell
. ./rebuild.sh
```

Start up http example script:

```shell
vagrant ssh -c '`npm bin`/forever start /vagrant/http.js'
```

Now test:

```shell
curl http://192.168.200.10:1337
```

