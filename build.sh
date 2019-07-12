cp -r ~/Notes/blog/posts/* ./blog
find ./blog -name "*.md" -execdir pandoc -s -c ~/Projects/satvikpendem.com/style.css index.md -o index.html \;