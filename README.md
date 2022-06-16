# Personal blog to write more and commit better
This will not only focus on software but will merge to other fields as well ... **Stay Tuned**.

# Backstory
One of the biggest problems with content creation in the internet is that you are enforced to do it in English so it can be accessible for a large number of audience and while something like this in itself is not bad (helping each other is a beautiful thing) but the language of Quran deserves more.

# Preview Your Localhost on the Internet
1. First run the website locally through this command (add `--livereload` in the end for debugging)
   
        bundle exec jekyll serve

2. Run Cloudflared through this command from a new terminal and you are done
   
       cloudflared tunnel --url http://127.0.0.1:4000/Commit-to-build/
