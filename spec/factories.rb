FactoryGirl.define do
		factory :user do
			email "aabb@hh.de"
      password "ruby"
      password_confrimation "ruby"
		end

    factory :board do
    	name "Testing board"
    end
end