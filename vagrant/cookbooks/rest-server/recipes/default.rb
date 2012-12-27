#
# Cookbook Name:: rest-server
# Recipe:: default
#
#

include_recipe "nodejs::npm"

execute "npm install" do
  cwd node['rest_server']['install_dir']
  command "npm install"
  action :run
end