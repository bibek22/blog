#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Bibek Gautam'
SITEURL = 'http://127.0.0.1:8000'
SITENAME = 'Bibek Gautam - Personal Website'
SITETITLE = AUTHOR
SITESUBTITLE = 'Computational Astrophysicist\n Studying Stellar Collapse'
SITEDESCRIPTION = AUTHOR + '\'s Thoughts and Writings'
SITELOGO = 'https://www.gravatar.com/avatar/030ebbd4ea952223d2693ce993b49a16?s=220'
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
          ('envelope', 'mailto:bgautam2@ncsu.edu'),
          ('instagram', 'https://instagram.com/masterprocastinator'),
          ('linkedin', "https://www.linkedin.com/in/bibek-gautam-07495a190/"))

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
PLUGINS = ['sitemap', 'pelicanJs', 'i18n_subsites', 'ipynb.liquid', 'render_math']
# , "pelican-ipynb.markup"]

# IGNORE_FILES = [".ipynb_checkpoints"]

JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}
# IPYNB_USE_METACELL = True
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

# DISQUS_SITENAME = "bibekg"
# ADD_THIS_ID = 'ra-5c9aeaba42301cb9'

STATIC_PATHS = ['images', 'extra', "static"]

EXTRA_PATH_METADATA = {
    'extra/custom.css': {'path': 'static/custom.css'},
}

CUSTOM_CSS = 'static/custom.css'

USE_LESS = True

# GOOGLE_ADSENSE = {
#     'ca_id': 'ca-pub-1726541799255911',    # Your AdSense ID
#     'page_level_ads': True,          # Allow Page Level Ads (mobile)
#     'ads': {
#         'aside': '2376242243',          # Side bar banner (all pages)
#         'main_menu': '',      # Banner before main menu (all pages)
#         'index_top': '2575197573',      # Banner after main menu (index only)
#         'index_bottom': '',   # Banner before footer (index only)
#         'article_top': '',    # Banner after article title (article only)
#         'article_bottom': '2609134398', # Banner after article content (article only)
#     }
# }
