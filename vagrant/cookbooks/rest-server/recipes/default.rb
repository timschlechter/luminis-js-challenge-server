#
# Cookbook Name:: rest-server
# Recipe:: default
#
#

package "nodejs"
package "npm"

execute "npm install" do
  cwd node['rest_server']['install_dir']
  command "npm install"
  action :run
end