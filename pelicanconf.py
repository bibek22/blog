#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Bibek Gautam'
SITEURL = 'https://www.bibekgautm.com.np'
SITENAME = 'Bibek Gautam - Blog'
SITETITLE = AUTHOR
SITESUBTITLE = 'Aspiring Physicist and Programmer'
SITEDESCRIPTION = AUTHOR + '\'s Thoughts and Writings'
SITELOGO = 'https://www.gravatar.com/avatar/030ebbd4ea952223d2693ce993b49a16?s=120'
FAVICON = '/images/favicon.ico'
BROWSER_COLOR = '#333333'
PYGMENTS_STYLE = 'friendly'

ROBOTS = 'index, follow'

THEME = './Flex'
PATH = 'content'
TIMEZONE = 'Asia/Kathmandu'

I18N_TEMPLATES_LANG = 'en'
DEFAULT_LANG = 'en'
OG_LOCALE = 'en_US.utf8'
LOCALE = 'en_US.utf8'

DATE_FORMATS = {
    'en': '%B %d, %Y',
}

# Max post preview
SUMMARY_MAX_LENGTH = 50

FEED_ALL_ATOM = 'feeds/all.atom.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

USE_FOLDER_AS_CATEGORY = False
MAIN_MENU = True
HOME_HIDE_TAGS = True

LINKS = (('Portfolio', 'portfolio.html'),)

SOCIAL = (('github', 'https://github.com/bibek22'),
          ('twitter', 'https://twitter.com/truelostdreamer'),
          ('envelope', 'mailto:forgot.bg@gmail.com'),
          ('instagram', 'https://instagram.com/masterprocastinator'))

MENUITEMS = (('Archives', '/archives.html'),
             ('Categories', '/categories.html'),
             ('Tags', '/tags.html'),)

CC_LICENSE = {
    'name': 'Creative Commons Attribution-ShareAlike',
    'version': '4.0',
    'slug': 'by-sa'
}

COPYRIGHT_YEAR = 2019
COPYRIGHT_NAME = AUTHOR 

DEFAULT_PAGINATION = 5


# for ipynb plugin thing from danielfrg/pelican-ipynb
MARKUP = ('md',)
PLUGIN_PATHS = ['./pelican-plugins', './plugins']
PLUGINS = ['sitemap', 'i18n_subsites', 'ipynb.liquid', 'render_math']

JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}

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

DISQUS_SITENAME = "bibekg"
ADD_THIS_ID = 'ra-5c9aeaba42301cb9'

STATIC_PATHS = ['images', 'extra']

EXTRA_PATH_METADATA = {
    'extra/custom.css': {'path': 'static/custom.css'},
}

CUSTOM_CSS = 'static/custom.css'

USE_LESS = True

GOOGLE_ADSENSE = {
}
