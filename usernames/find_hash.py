#! /bin/python
import sys
import hashlib

# Alternatively, you could just use the md5sum unix utitlity, but
# this allows you to check multiple emails at once

for email in sys.argv[1:]:
	print("{} -->  {}".format(email,hashlib.md5(email.encode()).hexdigest()))
