cp -r ~/Notes/blog/posts/* ./blog
find ./blog -name "*.md" -execdir pandoc -s -c ../../../style.css index.md -o index.html \;