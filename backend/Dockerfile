# Use the official Python image
FROM python:3.8-slim-buster

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy project files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run the web service on container startup
CMD ["python", "app.py"]