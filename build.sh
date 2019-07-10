find ./blog -name "*.html" -execdir pandoc -s -c ../../../style.css index.md -o index.html \;
