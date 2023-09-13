FROM mysql:latest

# Define environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=your_database_name
ENV MYSQL_USER=your_database_user
ENV MYSQL_PASSWORD=your_database_password

# Optionally, you can copy SQL scripts to initialize the database
COPY ./your-database-scripts.sql /docker-entrypoint-initdb.d/
