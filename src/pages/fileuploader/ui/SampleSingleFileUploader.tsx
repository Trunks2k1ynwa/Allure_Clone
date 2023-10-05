import { Label, Link, SingleFileUploader, Stack } from '@gui/fluent-ui-allure'
export const SampleSingleFileUploader = () => {
  return (
    <Stack>
      <Label required={true}>
        Browse the CSV/ZIP file where the records for which you want to restore the fields are configured
      </Label>
      <Link style={{ marginBottom: 8 }} underline>
        Download CSV template
      </Link>
      <SingleFileUploader
        accept='image/*'
        style={{ width: 600 }}
        onSelectionChanged={(file) => {
          console.log(file.name)
        }}
      />
    </Stack>
  )
}
