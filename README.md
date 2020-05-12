# Online Clinic.io
Medical doctors online consulation platform

## Features
- Medical doctor verification
- Secured file attachments (planned)
- Easy messaging app (started)
- Realtime video conversation (planned)
- Easy upload system (started)
- Donation System (planned)
- Patient Case System (implemented)

## Getting started

#### Dependencies
- RVM
- NVM (optional) running in node 11

For local developments, do the following

```sh
git clone git@github.com:neumerance/easy-clinic.git easy_clinic
cd easy_clinic
bundle install
rake db:setup
npm install
bundle exec rspec
```
Once all are green you can run the server
```sh
bundle exec rails s
```
