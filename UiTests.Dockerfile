FROM cypress/included:5.6.0 as build

COPY . /src
RUN chmod -R 755 /src
WORKDIR /src

# command to run cypress once container is running
ENTRYPOINT ["sh", "/src/start_ui_tests.sh"]