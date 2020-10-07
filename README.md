## fiserv
An Express, TypeScript, Node backend that parsers a JSON body on 2 different versions
of an api.

# to spin up a local production server
    - yarn install
    - yarn run-prod

# to spin up a local development server
    - yarn install
    - yarn run-dev

# to test after install dependencies (yarn install)
    - yarn test

# to get Docker spinning
    - cd into the master directory
    - docker build -t fiserv:latest .
    - docker run -p 80:80 -it fiserv