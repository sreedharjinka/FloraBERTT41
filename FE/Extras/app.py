import streamlit as st
import requests
from io import BytesIO
import wget
# Function to download file from a given link
def download_file(link):
    try:
        response = requests.get(link)
        if response.status_code == 200:
            st.info('File downloaing')
            wget.download(link, 'data')
            return response.content
        else:
            st.error(f"Failed to fetch file. Status code: {response.status_code}")
            return None
    except Exception as e:
        st.error(f"Error: {e}")
        return None

def main():
    st.title("Fetch and Download App")

    # Input field for the link
    link = st.text_input("Paste/Fetch Data:", "")

    # Button to trigger file download
    if st.button("Fetch Data"):
        if link:
            st.info("Fetching data...")

            # Download the file
            file_content = download_file(link)

            if file_content:
                # Offer the file for download
                st.success("Data downloaded successfully!")
        else:
            st.warning("Please enter a link.")

if __name__ == "__main__":
    main()
