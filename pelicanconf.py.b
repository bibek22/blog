#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Bibek Gautam'
SITENAME = 'Bibek Gautam - Blog'
SITEURL = 'http://bibekgautm.com.np'

PATH = 'content'

TIMEZONE = 'Asia/Kathmandu'

DEFAULT_LANG = 'en'


# Flex THEMES
THEME = 'Flex'
SITETITLE = 'Thoughts from /dev/random !'
SITESUBTITLE = 'Aspiring Physicist and programmer'
SITEDESCRIPTION = 'Bibek Gautam\'s Thoughts and Writings'
SITELOGO = SITEURL + '/images/profile.png'
FAVICON = SITEURL + '/images/favicon.ico'

BROWSER_COLOR = '#333'
ROBOTS = 'index, follow'

CC_LICENSE = {
        'name': 'Creative Commons Attribution-ShareAlike',
        'version': '4.0',
        'slug': 'by-sa'
        }

COPYRIGHT_YEAR = 2016

EXTRA_PATH_METADATA = {
        'extra/custom.css': {'path': 'static/custom.css'},
        }
CUSTOM_CSS = 'static/custom.css'

MAIN_MENU = True

ADD_THIS_ID = 'ra-5c9aeaba42301cb9'
DISQUS_SITENAME = ''
GOOGLE_ANALYTICS = ''
GOOGLE_TAG_MANAGER = ''
STATUSCAKE = {}

GITHUB_CORNER_URL='https://github.com/bibek22'

# Enable i18n plugin.
PLUGINS = ['i18n_subsites']
# Enable Jinja2 i18n extension used to parse translations.
# JINJA_EXTENSIONS = ['jinja2.ext.i18n']

# Default theme language.
I18N_TEMPLATES_LANG = 'en'

## Flex ends

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
