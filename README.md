![project-demo](https://github.com/MohamedAliRashad/The-Simple-Arabic-Theme/blob/main/assets/project-demo.gif)

English | [العربية](https://github.com/MohamedAliRashad/The-Simple-Arabic-Theme/blob/main/README.AR.md)

# The Simple Arabic Theme :waning_crescent_moon:
My innocent try to make the world a better place for people like me (simple humans who love the Arabic Language) :seedling: 

## :sparkles: How to use ?
1. Make a git repo with your username like this `{username}.github.io`
1. (optional) Add description and choose if you want your repo to be public or private (it wouldn't affect the hosting of the blog) 
1. Clone the repo into a folder of your choice using `git clone`
1. Open a command line inside the repo folder
1. Add remote `upstream` using the following command `git remote add upstream git@github.com:MohamedAliRashad/The-Simple-Arabic-Theme.git`
1. Pull the theme stable code using `git pull upstream main`
1. Merge the code pulled with your main branch using `git merge upstream/main --allow-unrelated-histories`
1. Open any text editor and change the following in `_config.yml`
    - baseurl from `/The-Simple-Arabic-Theme` to empty string or `/blog` if you want some customization (doesn't recommend it, if you don't know what you are doing) 
    - url from `https://mohamedalirashad.github.io` to the gh-pages url (you should only change the username in the link with the username in step 1)
    - favicon `/The-Simple-Arabic-Theme/assets/images/moon.svg` to `/assets/images/moon.svg` (if you changed the base url to something other than an empty string, you will need to add it in the begging)

**And that's it**, Just push the changes to your github repo and start building content :tada:

## :pencil2: How to make a post ?
1. Run this command in a terminal opened in the repo
    ```
    bundle exec jekyll serve --livereload
    ```
2. Go to the link printed after ` Server address:` (ctrl+click to open in Linux)
3. From the page that will be opened choose the tab `اصنع محتوى` and start making your content.
4. After finishing, Just download the post (using the `تفريغ` button) to the `_posts` folder
5. Make any last changes into it (you should see the post in the home page of `livereload` page).
6. Finally, Upload the post using `git add`, `git commit` and `git push` (or just use the sync functionality in vscode)

## :hand: Why i made it ?
I am a researcher who enjoys reading and learning new stuff from time to time. what i discovered through my days of learning was the superficiality of understanding i had in topics i though i know well.
The event that opened my eyes and let me know how much of a fool i am was when i translated a famous word i thought i understand very well into Arabic and thought about for some time to discover that i reached new levels of understanding i haven't reached before. All of this, just because i translated it into my mother tongue and gave myself some time to understand.

After this incident, i started to translate everything into Arabic and read it again to not just understand the idea presented to me but also the phalisophy behind it. And the journey so fat was amazing that's why i wanted to do this project for some time. I want others like me to learn and understand through content written in their mother tongue and to write themselves their ideas and theories about stuff in the world. 

## :construction_worker: Wants to contribute ?

**Note**: All Pull Requests is to be merged with the `dev` branch not the `main` branch.

I will make a series of videos explaning the project in Arabic for the enthuisasts who want  to help, **Stay Tuned** ...
