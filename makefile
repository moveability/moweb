all:
	bash script.sh

local:
	hugo; hugo serve

clean:
	rm -rf public
