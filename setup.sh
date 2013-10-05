sudo apt-get update
sudo apt-get install -y curl vim git
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
source ~/.profile
nvm install v0.10.20
nvm alias default 0.10.20
npm install forever
