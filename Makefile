build:
	nice index.nice public

serve:
	cd public;php -S localhost:8080

test: build serve

clean:
	rm -f `find -path '*~' | tr '\n' ' '`
