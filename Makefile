build:
	nice index.nice .

serve:
	php -S localhost:8080

clean:
	rm -f `find -path '*~' | tr '\n' ' '`
