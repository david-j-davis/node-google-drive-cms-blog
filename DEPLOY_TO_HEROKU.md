#Deploy to heroku

 - Make sure that u have the heroku toolbelt installed
 - Create a ``` Procfile ```
 - Insert the line ``` web: node bin/www ``` into it
 - Git commit the current state / update the master branch
 - login to heroku with ```heroku login```
 - Run from the command line ``` heroku create project-name ```
 - Set heroku remote with ```heroku git:remote -a project-name```
 - git push heroku master
 - ``` heroku addons:create mongolab --app project-name ``` - requisition a free mongodb server
 - ``` heroku config --app project-name ```
