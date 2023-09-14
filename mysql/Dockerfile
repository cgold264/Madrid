FROM mysql:latest

# Define environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=madrid_eats_db
ENV MYSQL_USER=springuser
ENV MYSQL_PASSWORD=ThePassword

# Optionally, you can copy SQL scripts to initialize the database
COPY ./scripts /docker-entrypoint-initdb.d/
