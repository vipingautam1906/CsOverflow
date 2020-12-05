package com.csOverflow.Question;



import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.util.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.core.io.Resource;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;


@Service
public class QuestionService {

   private Path fileStoragePath;
   private String fileStorageLocation;

   public QuestionService(@Value("${file.storage.location:temp}") String fileStorageLocation )
   {

       this.fileStorageLocation = fileStorageLocation;
       this.fileStoragePath = Paths.get(fileStorageLocation).toAbsolutePath().normalize();

       try {
           Files.createDirectories(this.fileStoragePath);
       } catch (IOException e) {
           throw new RuntimeException("Error creating directory for storage location: "+e);
       }

   }

    public String storeFile(MultipartFile file)
    {

        String fileName = StringUtils.cleanPath( file.getOriginalFilename() );  //removing spaces and unncessary char from filename
        Path filePath = Paths.get(  fileStoragePath + "\\" + fileName );   //appending filename to filestorage location

        try {
            Files.copy( file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING) ;
        } catch (IOException e) {
            throw new RuntimeException("Issue in storing the file");
        }

        return fileName;
    }


    public Resource downloadfile(String filename)
    {
        Resource resource;
        Path path = Paths.get(fileStorageLocation).toAbsolutePath().resolve(filename);

        try {
            resource = new UrlResource(path.toUri());
        } catch (MalformedURLException e) {
            throw new RuntimeException("Issue reading the file"+e);
        }

        if(resource.exists() && resource.isReadable())
        {
            return resource;
        }
        else{
            throw new RuntimeException("File does not exist or is not readable");
        }

    }

}
