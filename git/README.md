
Initializing a new GIT repo is as simple as `git init`.

```
git add -A
git commit -m 'my commit message`
```

Check if there are any files staged that haven't been committed yet:  
`git status`

See a history of commits with:  
`git log`

Create a new branch with:  
`git checkout -b new_branchname`

Display all branches with:  
`git branch`

Switch between branches with:  
`git checkout branchname_switching_to`

Don't forget `git remote -v` to see what the current remotes are.

There can be more than one remote. `git push`, will, of course, push to the current remote defined as the upstream.

Let's say we had another origin called 'otherorigin', we could add it as a remote with:

If Github...  
`git remote add otherorigin git@github.com:myusername/myreponame.git`

If not Github...  
`git remote add otherorigin ssh://username@domainname.com/path/to/repo/.git`  

`git push -u origin master` pushes to origin master, and sets the upstream branch to origin.

If we then `git push`, it'll push to origin. However, if we want to push to our other origin, we would have to specify it, because it isn't the upstreadm.  
`git push otherorigin master`

To fetch:  
`git fetch origin master`

To merge:
`git merge branchname_to_merge`

`git pull` will fetch and merge with one command.

### To *squash* commits
```
git reset --soft HEAD~3
git commit -m 'new commit message'
```
This will reset the head back by 3 and create a new commit, combining them into 1.
