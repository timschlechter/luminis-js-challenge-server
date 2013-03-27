Luminis Javascript Challenge server
===========================

Rest server for the Luminis Javascript challenge

Requirements
============
* [Vagrant](http://vagrantup.com/) (Made for 1.0.x, but should be compatible with 1.x. [More info](http://www.hashicorp.com/blog/vagrant-1-1-and-vmware.html))

Installation
============

0. Checkout project:

        git clone https://github.com/wtreur/luminis-js-challenge-server.git
        git submodule init
        git submodule update

1. Launch and access vagrant

        cd <projectdir>/vagrant
        vagrant up
        vagrant ssh

2. Launch rest-server from vagrant ssh session

        node rest-server/app

3. Open local browser and point to <http://localhost:18080>
