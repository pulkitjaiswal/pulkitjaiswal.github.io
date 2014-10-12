rake generate
rsync -r public/* ../pulkitjaiswal.github.io
cd desktop/source/pulkitjaiswal.github.io
git add .
git commit -am "new post"
git push
