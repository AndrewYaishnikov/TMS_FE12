// Main analog
Subversion (SVN) - a bit more secure but much less flexible

//other
mercurial - easier git (but already outdated)
fossil - (more sunchronize tool than a version control)

// git GUI
1. Git gui
2. Git craken
3. git extensions
4. Sourcetree

//git alias
git config --global alias.co checkout

//.gitconfig
  [alias]
co = checkout

//usefullness
save = !git add -A && git commit -m 'SAVEPOINT'
//add al utracked files then commit
undo = reset HEAD~1 --mixed
//pretty self explanatory yes?

//NO!

--soft
Does not touch the index file or the working tree at all This leaves all your changed files "Changes to be committed"

--mixed
Resets the index but not the working tree

--hard
Resets the index and working tree. Any changes to tracked files in the working tree since <commit> are discarded.

--merge
Resets the index and updates the files in the working tree that are different between <commit> and HEAD, but keeps those which are different between the index and working tree

--keep
Resets index entries and updates files in the working tree that are different between <commit> and HEAD.


head~1 one commit back from current head

//detached head
git branch
git reset --hard
git checout master

//propper reset
wipe = !git add -A && git commit -qm 'WIPE SAVEPOINT' && git reset HEAD~1 --hard

//You can run the git reflog command and find the SHA of the commit if you realize later that you made a mistake with the reset. The commit message will be “WIPE SAVEPOINT” in this case.

//.gitignore
https://www.toptal.com/developers/gitignore

# - comment
* - any symbols except /
?  - any one symbol

**/tool?.js - find smt ewerywhere
smth/** - ewerything inside smth
 could be a/**/b

//.editorconfig
https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties
  https://plugins.jetbrains.com/plugin/7294-editorconfig

  # Indentation override for all JS under lib directory
  [lib/**.js]
 indent_style = space
 indent_size = 2

 //git hooks
pre-commit
prepare-commit-msg
commit-msg
post-commit
pre-rebase

 /*STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep ".jsx\{0,1\}$")

if [[ "$STAGED_FILES" = "" ]]; then
  exit 0
fi

PASS=true

echo "\nValidating Javascript:\n"

# Check for eslint
which eslint &> /dev/null
if [[ "$?" == 1 ]]; then
  echo "\t\033[41mPlease install ESlint\033[0m"
  exit 1
fi

for FILE in $STAGED_FILES
do
  eslint "$FILE"

  if [[ "$?" == 0 ]]; then
    echo "\t\033[32mESLint Passed: $FILE\033[0m"
  else
    echo "\t\033[41mESLint Failed: $FILE\033[0m"
    PASS=false
  fi
done

echo "\nJavascript validation completed!\n"

if ! $PASS; then
  echo "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
  exit 1
else
  echo "\033[42mCOMMIT SUCCEEDED\033[0m\n"
fi

exit $?*/



//git pipelines (gitlab - specific mostly)

alias

git fetch
git reset origin/master --hard
npm i
npm run deploy





