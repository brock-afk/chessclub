FROM python:3.11-slim

WORKDIR /app

RUN pip install --upgrade pip

COPY requirements.txt /app/

RUN pip install -r requirements.txt

COPY . /app/

EXPOSE 5000

CMD [ "flask", "--app", "src/main", "run", "--host", "0.0.0.0" ]