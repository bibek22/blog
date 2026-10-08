#!/usr/bin/env python
# -*- coding: utf-8 -*- #

import os

AUTHOR = 'Bibek Gautam'
SITEURL = 'http://127.0.0.1:8000'
SITENAME = 'Bibek Gautam'
SITEROLE = 'PhD Candidate, NC State University · Computational Astrophysics'
SITEDESCRIPTION = (AUTHOR + ' - computational astrophysics: gravitational waves from '
                   'core-collapse supernovae and r-process nucleosynthesis in collapsars')
SITELOGO = 'https://www.gravatar.com/avatar/030ebbd4ea952223d2693ce993b49a16?s=264'
FAVICON = '/images/favicon.ico'

ROBOTS = 'index, follow'

THEME = './theme'
PATH = 'content'
TIMEZONE = 'America/New_York'

DEFAULT_LANG = 'en'
LOCALE = 'en_US.utf8'

DATE_FORMATS = {
    'en': '%B %d, %Y',
}

FEED_ALL_ATOM = 'feeds/all.atom.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

USE_FOLDER_AS_CATEGORY = False

# shown on the home page, in this order
SOCIAL = (('Google Scholar', 'https://scholar.google.com/citations?hl=en&user=ZbrYYuMAAAAJ'),
          ('ORCID', 'https://orcid.org/0000-0002-3211-3427'),
          ('GitHub', 'https://github.com/bibek22'),
          ('Email', 'mailto:bgautam2@ncsu.edu'),
          ('LinkedIn', 'https://www.linkedin.com/in/bibek-gautam-07495a190/'))

# the CV link appears once content/static/cv.pdf exists
_HERE = os.path.dirname(os.path.abspath(__file__))
CV_URL = 'static/cv.pdf' if os.path.exists(os.path.join(_HERE, 'content/static/cv.pdf')) else None

CC_LICENSE = {
    'name': 'Creative Commons Attribution-ShareAlike',
    'version': '4.0',
    'slug': 'by-sa'
}

COPYRIGHT_YEAR = '2019-2026'
COPYRIGHT_NAME = AUTHOR

# about.md is the home page; the post list lives under /notes/
DIRECT_TEMPLATES = ['index']
INDEX_SAVE_AS = 'notes/index.html'
DEFAULT_PAGINATION = False
CATEGORY_URL = 'notes/{slug}/'
CATEGORY_SAVE_AS = 'notes/{slug}/index.html'
TAG_SAVE_AS = ''
AUTHOR_SAVE_AS = ''

MARKUP = ('md',)
PLUGIN_PATHS = ['./pelican-plugins', './plugins']
PLUGINS = ['sitemap', 'pelicanJs', 'pelican.plugins.render_math']

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.6,
        'indexes': 0.6,
        'pages': 0.5,
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly',
    }
}

STATIC_PATHS = ['images', 'extra', 'static']

EXTRA_PATH_METADATA = {
    'extra/_redirects': {'path': '_redirects'},
}

CUSTOM_CSS = 'static/custom.css'
