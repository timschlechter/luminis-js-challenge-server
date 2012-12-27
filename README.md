Luminis Javascript Challenge server
===========================

Rest server for the Luminis Javascript challenge

Requirements
============
* [Vagrant](http://vagrantup.com/)

Installation
============

1. Checkout project:

        git clone https://github.com/wtreur/luminis-js-challenge-server.git
        git submodule init
        git submodule update

1. Launch and access vagrant

        cd <projectdir>/vagrant
        vagrant up
        vagrant ssh

1. Install rest-server from vagrant ssh session

        cd ~/rest-server
        npm install

1. Launch rest-server from vagrant ssh session

        node app

6. Open local browser and point to <http://localhost:18080>

Additional info
===============
* Couchdb server is forwarded to <http://localhost:15984/>