#!/usr/bin/env bash
# syntax:
#   ./item-edited-email.sh 'name@email.edu' 'http://abc.edu/item/url'

# institution-specific configuration
FROM_NAME='CCA VAULT'
FROM_ADDR='vault@cca.edu'
REPLY_NAME='Communications Department'
REPLY_ADDR='communications@cca.edu'

# parameters passed when script is run
RECIPIENT=${1}
ITEM=${2}

# change email template heredoc to whatever you need
sendmail ${RECIPIENT} <<EmailDocument
From: ${FROM_NAME} <${FROM_ADDR}>
Reply-To: ${REPLY_NAME} <${REPLY_ADDR}>
Subject: VAULT Item Shared by CCA Communications

Hello,

The following VAULT item has been shared with the CCA Communications deparment by the program's chair:
${ITEM}

This means that the item is visible to all CCA staff and faculty and that the media contained in the item *may* be used for promotional purposes. You still retain copyright over the work. If you have questions about this, contact CCA's Communications department at their ${REPLY_ADDR} address.
EmailDocument
