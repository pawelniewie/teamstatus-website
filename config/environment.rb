# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
ConsoleRails::Application.initialize!

%w{COOKIE_SECRET COOKIE_NAME MAILCHIMP_KEY MAILCHIMP_LIST}.each do |var|
  abort("missing env var: please set #{var}") unless ENV[var]
end

ENV['COOKIE_DOMAIN'] ||= ''

%w{GOOGLE_ANALYTICS GOOGLE_KEY GOOGLE_SECRET INTERCOM_APP_ID INTERCOM_KEY INTERCOM_SECRET MIXPANEL_APP_ID}.each do |var|
	puts "missing env var (some features will be disabled): #{var}" unless ENV[var]
end