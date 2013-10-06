# Vagrant NodeJs

Build the vagrant box:

```shell
$ . ./rebuild.sh
```

Start example scripts:

```shell
$ . ./start.sh
```

Test it:

```shell
$ nc 192.168.200.10 1337
Echo server
hello
hello
^C
$ curl 192.168.200.10:8080
Hello World
```

