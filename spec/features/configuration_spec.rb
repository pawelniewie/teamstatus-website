# require 'spec_helper'

# describe 'Configuration', :type => :feature  do
# 	let (:user) { create(:user) }
# 	let (:board) { create(:board, :user_id => user.id) }

#   before :each do
#     login_as user, :scope => :user
#   end

#   it 'shows Clock configutaion', :js => true do
#     visit new_board_job_path(board.id, :anchor => 'clock')
#     page.should have_content('Timezone')
#   end

#   it 'shows JIRA server configutaion', :js => true do
#     visit new_board_job_path(board.id, :anchor => '/jira-issue-list')
#     page.should have_content('JIRA address')
#   end

# 	it 'shows JIRA Counter configutaion', :js => true do
#     visit new_board_job_path(board.id, :anchor => '/jira-simple-counter')
#     page.should have_content('JIRA address')
#   end

#   it 'shows HTML static configutaion', :js => true do
#     visit new_board_job_path(board.id, :anchor => '/static-html')
#     page.should have_css('#html')
#   end

#   it 'shows Bamboo builds configutaion', :js => true do
#     visit new_board_job_path(board.id, :anchor => '/bamboo-builds')
#     page.should have_content('Bamboo address')
#   end

#   it 'shows Crucible reviews configutaion', :js => true do
#     visit new_board_job_path(board.id, :anchor => '/crucible-reviews')
#     page.should have_content('Crucible address')
#   end

#   it 'shows STFU configutaion', :js => true do
#     visit new_board_job_path(board.id, :anchor => '/stfu')
#     page.should have_content('Start at:')
#   end

#   it 'show PostgreSQL list configuration', :js => true do
#     visit new_board_job_path(board.id, :anchor => '/postgresql-list')
#     page.should have_content('SQL query')
#   end

#   it 'show PostgreSQL number configuration', :js => true do
#     visit new_board_job_path(board.id, :anchor => '/postgresql-number')
#     page.should have_content('SQL query')
#   end

# end