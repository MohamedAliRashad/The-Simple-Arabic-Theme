# Personal Website
A place where i can elaborate more

# Preview Your Localhost on the Internet

1. First run the website locally through this command (add `--livereload` in the end for debugging)
   
        bundle exec jekyll serve

2. Run Cloudflared through this command from a new terminal and you are done
   
       cloudflared tunnel --url http://127.0.0.1:4000/Commit-to-build/