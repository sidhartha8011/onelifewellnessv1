import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AlertCircle, Save, X, Image, Eye } from "lucide-react";
// import { createBlog, getBlogById, updateBlog } from "@/Services/BlogsApi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

// Import the file upload function
// import { uploadFile } from "@/Services/fileUpload"; // Adjust the import path as needed

// Styled Components
const Container = styled.div`
  container: auto;
  padding: 1.5rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
  font-size: 0.875rem;

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: black;
    color: white;
    &:hover {
      background-color: #111827;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: #f3f4f6;
    color: #374151;
    &:hover {
      background-color: #e5e7eb;
    }
  `}
  
  ${(props) =>
    props.variant === "default" &&
    `
    background-color: white;
    color: #374151;
    border: 1px solid #d1d5db;
    &:hover {
      background-color: #f9fafb;
    }
  `}
`;

const ErrorMessage = styled.div`
  margin-bottom: 1.5rem;
  background-color: #fef2f2;
  border: 1px solid #fee2e2;
  color: #b91c1c;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormContainer = styled.form`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const FormSection = styled.div`
  padding: 1.5rem;
`;

const FormFooter = styled.div`
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: flex-end;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  focus-visible: outline-none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    border-color: transparent;
  }
`;

const Checkbox = styled.input`
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  
  &:focus {
    ring-offset-2;
    ring-2;
    ring-blue-500;
  }
`;

const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
  display: block;
  font-size: 0.875rem;
  color: #374151;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const UploadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const UploadArea = styled.div``;

const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: white;
  color: #3b82f6;
  border-radius: 0.5rem;
  border: 1px dashed #d1d5db;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }

  &.uploading {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const Preview = styled.div`
  margin-left: 1rem;
  position: relative;
  height: 5rem;
  width: 5rem;
  border-radius: 0.25rem;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

const PreviewImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ef4444;
  color: white;
  border-radius: 9999px;
  padding: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: translate(33%, -33%);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ProgressContainer = styled.div`
  margin-top: 0.5rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 0.625rem;
`;

const ProgressIndicator = styled.div`
  background-color: #2563eb;
  height: 0.625rem;
  border-radius: 9999px;
  width: ${(props) => props.progress}%;
`;

const ProgressText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

const SuccessText = styled.p`
  font-size: 0.75rem;
  color: #10b981;
  margin-top: 0.25rem;
`;

const UploadPreviewContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PreviewContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const PreviewHeader = styled.div`
  position: relative;
  height: 16rem;
  background-color: #f3f4f6;
`;

const PreviewPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #9ca3af;
`;

const PreviewContent = styled.div`
  padding: 1.5rem;
`;

const PreviewTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const PreviewMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.span`
  margin-right: 1rem;

  &:last-child {
    margin-left: 1rem;
  }
`;

const EditorContainer = styled.div`
  .ql-container {
    height: 250px;
    font-size: 16px;
    overflow-y: auto;
  }

  .ql-toolbar {
    background-color: #f9fafb;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }

  .ql-editor {
    min-height: 250px;
  }
`;

const EditorNote = styled.p`
  margin-top: 4rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

const BlogFormPage = () => {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const quillRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    visible: true,
    cover_image: "", // Will store the URL from the API response
    userId: 1,
    label: "",
  });

  const [imagePreview, setImagePreview] = useState("");

  // Quill editor modules configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
  ];

  // Fetch blog data when in edit mode
  useEffect(() => {
    const fetchBlog = async () => {
      if (isEditMode && id) {
        try {
          setIsLoading(true);
          setError(null);

          const blogData = await getBlogById(parseInt(id));

          // Set form data from fetched blog
          setFormData({
            title: blogData.title,
            content: blogData.content,
            visible: blogData.visible,
            cover_image: blogData.cover_image,
            userId: blogData.userId,
            label: blogData.label,
          });

          // Set image preview if cover image exists
          if (blogData.cover_image) {
            setImagePreview(blogData.cover_image);
          }
        } catch (err) {
          setError(err.message || "Failed to fetch blog data");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchBlog();
  }, [id, isEditMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        // Create a preview for the UI immediately
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setImagePreview(base64String);
        };
        reader.readAsDataURL(file);

        // Start upload process
        setIsUploading(true);
        setUploadProgress(0);
        setError(null);

        // Upload the file to S3
        const uploadResult = await uploadFile(file);

        // Get the URL from the upload response
        const imageUrl = uploadResult?.fileUrl[0]?.fileUrl;

        if (!imageUrl) {
          throw new Error("Failed to get image URL from upload response");
        }

        // Update form data with the uploaded image URL
        setFormData((prev) => ({
          ...prev,
          cover_image: imageUrl,
        }));

        setUploadProgress(100);
      } catch (err) {
        setError(`Image upload failed: ${err.message || "Unknown error"}`);

        // Reset image preview if upload failed
        setImagePreview("");
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate
      if (!formData.title.trim()) {
        throw new Error("Blog title is required");
      }

      if (!formData.content.trim()) {
        throw new Error("Blog content is required");
      }

      // Validate image for new blog posts
      if (!isEditMode && !formData.cover_image) {
        throw new Error("Cover image is required for new blog posts");
      }

      // Submit blog data to API - different endpoint based on mode
      if (isEditMode && id) {
        await updateBlog(parseInt(id), formData);
      } else {
        await createBlog(formData);
      }

      // Redirect on success
      navigate("/admin--dashboard/blogs");
    } catch (err) {
      setError(
        err.message || `Failed to ${isEditMode ? "update" : "create"} blog post`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveImage = () => {
    // Clear image preview and URL
    setImagePreview("");
    setFormData((prev) => ({ ...prev, cover_image: "" }));
    setUploadProgress(0);
  };

  if (isLoading) {
    return (
      <Container className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>{isEditMode ? "Edit Blog Post" : "Create New Blog Post"}</Title>

        <ButtonGroup>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setPreviewMode(!previewMode)}
          >
            <Eye size={16} />
            {previewMode ? "Edit Mode" : "Preview"}
          </Button>

          <Button
            type="button"
            variant="default"
            onClick={() => navigate("/admin--dashboard/blogs")}
          >
            <X size={16} />
            Cancel
          </Button>
        </ButtonGroup>
      </HeaderContainer>

      {/* Error message */}
      {error && (
        <ErrorMessage>
          <AlertCircle size={20} />
          <span>{error}</span>
        </ErrorMessage>
      )}

      {previewMode ? (
        <PreviewContainer>
          {/* Preview header with cover image */}
          <PreviewHeader>
            {imagePreview ? (
              <PreviewImage src={imagePreview} alt="Cover preview" />
            ) : (
              <PreviewPlaceholder>
                <Image size={48} />
              </PreviewPlaceholder>
            )}
          </PreviewHeader>

          {/* Preview content */}
          <PreviewContent>
            <PreviewTitle>
              {formData.title || "Untitled Blog Post"}
            </PreviewTitle>

            <PreviewMeta>
              <MetaItem>By: System</MetaItem>
              <MetaItem>
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </MetaItem>
              <MetaItem>
                {formData.visible ? (
                  <span style={{ color: "#10b981" }}>Published</span>
                ) : (
                  <span style={{ color: "#6b7280" }}>Draft</span>
                )}
              </MetaItem>
            </PreviewMeta>

            <div className="prose max-w-none">
              {formData.content ? (
                <div dangerouslySetInnerHTML={{ __html: formData.content }} />
              ) : (
                <p style={{ color: "#9ca3af", fontStyle: "italic" }}>
                  No content yet.
                </p>
              )}
            </div>
          </PreviewContent>
        </PreviewContainer>
      ) : (
        <FormContainer onSubmit={handleSubmit}>
          <FormSection>
            <FormGroup>
              <Label htmlFor="title">Blog Title *</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter blog title"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="content">Content *</Label>
              <EditorContainer>
                <ReactQuill
                  ref={quillRef}
                  theme="snow"
                  value={formData.content}
                  onChange={handleEditorChange}
                  modules={modules}
                  formats={formats}
                  placeholder="Write your blog content here..."
                />
              </EditorContainer>
              <EditorNote>
                Use the formatting toolbar above to style your content. Add
                images, links, and more.
              </EditorNote>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="label">Label *</Label>
              <Input
                type="text"
                id="label"
                name="label"
                value={formData.label}
                onChange={handleInputChange}
                placeholder="Enter blog label"
                required
              />
            </FormGroup>

            <UploadContainer>
              <UploadArea>
                <Label htmlFor="cover_image">
                  Cover Image {isEditMode ? "(Change optional)" : "*"}
                </Label>
                <UploadPreviewContainer>
                  <UploadLabel className={isUploading ? "uploading" : ""}>
                    <Image size={24} />
                    <span
                      style={{
                        marginTop: "0.5rem",
                        fontSize: "0.875rem",
                        color: "#6b7280",
                      }}
                    >
                      {isEditMode ? "Click to change image" : "Click to upload"}
                    </span>
                    <UploadInput
                      type="file"
                      id="cover_image"
                      name="cover_image"
                      accept="image/*"
                      onChange={handleImageChange}
                      disabled={isUploading}
                      {...(isEditMode || formData.cover_image
                        ? {}
                        : { required: true })}
                    />
                  </UploadLabel>

                  {imagePreview && (
                    <Preview>
                      <PreviewImage src={imagePreview} alt="Preview" />
                      <RemoveButton
                        type="button"
                        onClick={handleRemoveImage}
                        disabled={isUploading}
                      >
                        <X size={12} />
                      </RemoveButton>
                    </Preview>
                  )}
                </UploadPreviewContainer>

                {/* Upload progress indicator */}
                {isUploading && (
                  <ProgressContainer>
                    <ProgressBar>
                      <ProgressIndicator progress={uploadProgress} />
                    </ProgressBar>
                    <ProgressText>
                      Uploading image: {uploadProgress}%
                    </ProgressText>
                  </ProgressContainer>
                )}

                {!isUploading && formData.cover_image && (
                  <SuccessText>Image uploaded successfully!</SuccessText>
                )}
              </UploadArea>
            </UploadContainer>

            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="visible"
                name="visible"
                checked={formData.visible}
                onChange={handleCheckboxChange}
              />
              <CheckboxLabel htmlFor="visible">
                Publish immediately (uncheck to save as draft)
              </CheckboxLabel>
            </CheckboxContainer>
          </FormSection>

          <FormFooter>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting || isUploading}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  {isEditMode ? "Update Blog Post" : "Save Blog Post"}
                </>
              )}
            </Button>
          </FormFooter>
        </FormContainer>
      )}
    </Container>
  );
};

export default BlogFormPage;
